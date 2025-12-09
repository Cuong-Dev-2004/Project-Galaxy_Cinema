export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-10 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div>
                    <h2 className="text-xl font-semibold mb-3">About Us</h2>
                    <p className="text-sm opacity-80 leading-relaxed">
                        We provide high‑quality digital solutions and ensure that our clients always receive the best possible service.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li><a href="#" className="hover:opacity-100">Home</a></li>
                        <li><a href="#" className="hover:opacity-100">Services</a></li>
                        <li><a href="#" className="hover:opacity-100">Contact</a></li>
                        <li><a href="#" className="hover:opacity-100">About</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3">Contact</h2>
                    <p className="text-sm opacity-80 leading-relaxed">Email: support@example.com</p>
                    <p className="text-sm opacity-80 leading-relaxed">Phone: (+84) 123 456 789</p>
                    <p className="text-sm opacity-80 leading-relaxed">Address: Ho Chi Minh City</p>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm opacity-75">
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
}
