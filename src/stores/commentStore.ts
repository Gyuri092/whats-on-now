import { CommentStoreType } from '@/types/comment';
import { create } from 'zustand';

const useCommentStore = create<CommentStoreType>((set) => ({
  hideComments: false,
  toggleHideComments: () =>
    set((state: { hideComments: boolean }) => ({
      hideComments: !state.hideComments,
    })),
}));

export default useCommentStore;
