module.exports = {
  stylesheets: [
    {
      name: 'image-sequence'
    }
  ],
  extend: 'apostrophe-widgets',
  label: 'Add Image',
  addFields: [
    {
      name: 'imageName',
      type: 'string',
      label: 'Name',
      required: true
    }
  ]
};
