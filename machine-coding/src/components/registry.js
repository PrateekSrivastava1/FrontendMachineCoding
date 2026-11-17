import Counter from './counter'
import FileExplorer from './fileExplorer'
import InfiniteScrolling from './infiniteScrolling'
import NestedComments  from './NestedComments'
import Wordle from './wordleGame'
/**
 * Register a practice component here.
 * 1. Add a folder under src/components/<name>/
 * 2. Export the component from that folder's index.js
 * 3. Add an entry to this list
 */
export const problems = [
  {
    id: 'counter',
    title: 'Counter',
    Component: Counter,
  },
  {
    id: 'infinite-scrolling',
    title: 'Infinite Scrolling',
    Component: InfiniteScrolling,
  },
  {
    id: 'wordle',
    title: 'Wordle',
    Component: Wordle
  },
  {
    id: 'file-explorer',
    title: 'File Explorer',
    Component: FileExplorer
  },
  {
    id: 'nested-comments',
    title: 'Nested Comments',
    Component: NestedComments
  }
]
