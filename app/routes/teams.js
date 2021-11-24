import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export const ALL_TEAMS = [
  {
    id: 'angrycat',
    name: 'Angry Cat',
    order: 5,
    iconUrl: '/assets/img/angry-cat.jpg',
  },
  {
    id: 'javascript',
    name: 'Javascript',
    order: 6,
    iconUrl: '/assets/img/js.png',
  }
];
export default class TeamsRoute extends Route {
  /**
   *
   * @type {AuthService}
   */
  @service auth;

  async beforeModel(transition) {
    await super.beforeModel(transition);
    if (!this.auth.currentUserId) {
      this.transitionTo('login');
    }
  }

  async model() {
    return ALL_TEAMS
  }
}
