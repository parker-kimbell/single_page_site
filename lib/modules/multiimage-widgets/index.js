module.exports = {
  stylesheets: [
    {
      name: 'image-sequence'
    }
  ],
  extend: 'apostrophe-widgets',
  label: 'Add Image!!',
  addFields: [
    {
      name: 'image',
      type: 'attachment',
      label: 'Image',
      required: true
    }
  ]
};
