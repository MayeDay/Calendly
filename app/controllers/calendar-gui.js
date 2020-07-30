import Controller from '@ember/controller';
import Ember from 'ember';

export default class CalendarGuiController extends Controller {

    updated = Ember.computed('model', function () {
        let date = new Date();
        return date;
      });
}
