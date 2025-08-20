import skills from './skills.json';
import experiences from './experiences.json';
import projects from './projects.json';
import site from './site.json';

class PortfolioStore {
  constructor({ skills, experiences, projects, site }) {
    this._skills = skills;
    this._experiences = experiences;
    this._projects = projects;
    this._site = site;
  }
  get skills() { return this._skills; }
  get experiences() { return this._experiences; }
  get projects() { return this._projects; }
  get site() { return this._site; }

  addSkill(skill) { this._skills = [...this._skills, skill]; }
  addExperience(exp) { this._experiences = [...this._experiences, exp]; }
  addProject(project) { this._projects = [...this._projects, project]; }
}

export const store = new PortfolioStore({ skills, experiences, projects, site });