import Ember from 'ember';
import layout from 'ember-composable-forms/templates/components/composable-form';

const { Component, get, set } = Ember;

export default Component.extend({
  layout,

  /**
   * Hash of form fields which maps field names to their current values
   * @type {Object}
   */
  formFields: null,

  onFormSubmit() {},

  init() {
    this._super(...arguments);
    set(this, 'formFields', {});
  },

  actions: {
    /**
     * Forward current form data to external action when the form is submitted
     */
    onFormSubmit() {
      this.onFormSubmit(get(this, 'formFields'));
    },

    /**
     * Update a form field with a new value
     * @param {String} fieldName The name of the field
     * @param {*} fieldValue The new value of the field
     */
    onFieldChange(fieldName, fieldValue) {
      const formFields = get(this, 'formFields');
      set(formFields, fieldName, fieldValue);
    },
  },
});
