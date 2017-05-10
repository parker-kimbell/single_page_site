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
      name: 'id',
      type: 'id',
      label: 'ID',
      required: true
    }
  ]
};
