const slugify = require("slugify");

const HastSlug = (slug) => {
    return slugify(slug, { lower: true });
};

module.exports = HastSlug;
