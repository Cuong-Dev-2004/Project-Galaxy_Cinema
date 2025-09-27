const bcrypt = require("bcrypt");
const jsw = require("jsonwebtoken")
const User = require("../models/User");

const UserControllers = {
    RegisterUser: async (req, res) => {
        try {
            const { UserName, Email, Password, admin } = req.body;

            if (!UserName || !Email || !Password) {
                return res.status(400).json("Information not valid");
            }

            const existingUser = await User.findOne({ Email });
            if (existingUser) {
                return res.status(409).json("Email already exists");
            }

            const hash = await bcrypt.hash(Password, 10);

            const user = new User({
                UserName,
                Email,
                Password: hash,
                admin: admin || false
            });

            const savedUser = await user.save();
            const { Password: pw, ...others } = savedUser._doc;

            res.status(200).json(others);

        } catch (error) {
            console.error("RegisterUser Error:", error);
            res.status(500).json("Internal server error");
        }
    },
    GenerateNewAccessToken: async (user) => {
        return jsw.sign({
            id: user.id,
            role: user.role,

        }, process.env.JWT_Access_KEY, { expiresIn: "30d" });
    },
    GenerateNewRefreshToken: async (user) => {
        return jsw.sign({
            id: user.id,
            role: user.role,

        }, process.env.JWT_REFRESH_KEY, { expiresIn: "30d" });
    },
    // SignIn
    SignIn: async (req, res) => {
        try {
            const { UserName, Password } = req.body;

            if (!UserName || !Password) {
                return res.status(400).json("Input not valid");
            }

            const user = await User.findOne({ UserName });
            if (!user) {
                return res.status(401).json("User not found");
            }

            const isPasswordCorrect = bcrypt.compareSync(Password, user.Password);
            if (!isPasswordCorrect) {
                return res.status(401).json("Wrong password");
            }

            const AccessToken = await UserControllers.GenerateNewAccessToken(user);
            const RefreshToken = await UserControllers.GenerateNewRefreshToken(user);

            res.cookie("RefreshToken", RefreshToken, {
                httpOnly: true,
                secure: false,
                path: '/',
                sameSite: "strict",
            });

            const { Password: pw, ...others } = user._doc;

            res.status(200).json({ ...others, AccessToken });

        } catch (error) {
            console.error("❌ SignIn Error:", error);
            res.status(500).json("Internal Server Error");
        }
    },

    // REFRESH TOKEN
    RefreshToken: async (req, res) => {
        const refreshToken = req.cookies.RefreshToken;

        if (!refreshToken) {
            return res.status(401).json("You are not authenticated");
        }

        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid");
        }
        try {
            jsonwebtoken.verify(refreshToken, process.env.JWT_REFRESH_KEY, async (err, decodedUser) => {
                if (err) {
                    return res.status(403).json("Refresh token is not valid");
                }

                const user = await User.findById(decodedUser.id);
                if (!user) return res.status(404).json("User not found");

                refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

                const newAccessToken = authControllers.GenerateNewAccessToken(user);
                const newRefreshToken = authControllers.GenerateNewrefreshToken(user);

                refreshTokens.push(newRefreshToken);

                res.cookie("RefreshToken", newRefreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: "strict"
                });

                res.status(200).json({ AccessToken: newAccessToken });
            });
        } catch (error) {
            return res.status(500).json("Internal server error");

        }
    },

    // Log out 
    LogOut: async (req, res) => {
        res.clearCookie("RefreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.RefreshToken);
        res.status(200).json("Logged out successfully");
    }
};

module.exports = UserControllers;
