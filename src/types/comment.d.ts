export type CommentState = {
  hideComments: boolean;
  toggleComments: () => void;
};

export interface CommentStoreType {
  hideComments: boolean;
  toggleHideComments: () => void;
}
