/**
 * Users are identified by case-sensitive ids, and live under `/v0/user/`.
 * Only users that have public activity (comments or story submissions) on the site are
 * available through the API.
 */
export interface IUser {
  /**
   * The user's unique username. Case-sensitive. Required.
   */
  id: string;

  /**
   * Creation date of the user, in Unix Time.
   */
  created: number;

  /**
   * The user's karma.
   */
  karma: number;

  /**
   * The user's optional self-description. HTML.
   */
  about?: string;

  /**
   * List of the user's stories, polls and comments.
   */
  submitted?: number[];
}

/**
 * Stories, comments, jobs, Ask HNs and even polls are just items. They're identified by their ids,
 * which are unique integers, and live under `/v0/item/<id>`.
 */
export interface IItem {
  /**
   * The item's unique id.
   */
  id: number;

  /**
   * `true` if the item is deleted.
   */
  deleted?: boolean;

  /**
   * The type of item. One of `job`, `story`, `comment`, `poll`, or `pollopt`.
   */
  type?: string;

  /**
   * The username of the item's author.
   */
  by?: string;

  /**
   * Creation date of the item, in Unix Time.
   */
  time?: number;

  /**
   * The comment, story or poll text. HTML.
   */
  text?: string;

  /**
   * `true` if the item is dead.
   */
  dead?: boolean;

  /**
   * The comment's parent: either another comment or the relevant story.
   */
  parent?: number;

  /**
   * The pollopt's associated poll.
   */
  poll?: number;

  /**
   * The ids of the item's comments, in ranked display order.
   */
  kids?: number[];

  /**
   * The URL of the story.
   */
  url?: string;

  /**
   * The story's score, or the votes for a pollopt.
   */
  score?: number;

  /**
   * The title of the story, poll or job. HTML.
   */
  title?: string;

  /**
   * A list of related pollopts, in display order.
   */
  parts?: number[];

  /**
   * In the case of stories or polls, the total comment count.
   */
  descendants?: number;
}
