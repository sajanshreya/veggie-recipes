export default function BookmarkButton({ bookmarked, onClick }) {
  return (
    <button
      className={`bookmark-btn ${bookmarked ? 'bookmarked' : ''}`}
      onClick={e => { e.stopPropagation(); onClick(); }}
      aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark recipe'}
      title={bookmarked ? 'Remove bookmark' : 'Save recipe'}
    >
      {bookmarked ? '♥' : '♡'}
    </button>
  );
}
