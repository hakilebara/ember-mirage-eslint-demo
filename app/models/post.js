import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany('comment'),
  title: DS.attr('string'),
  body: DS.attr('string')
});
