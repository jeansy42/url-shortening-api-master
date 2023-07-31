export type ShortUrlItem = { id: string; original: string; short: string };

type Action =
  | { type: "ADD"; payload: ShortUrlItem }
  | { type: "DELETE"; id: string };

export type ShortUrlState = { urls: ShortUrlItem[] };

const ShortUrlReducer = (state: ShortUrlState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, urls: [action.payload, ...state.urls] };
    case "DELETE": {
      const newShortsUrls = state.urls.filter((url) => url.id !== action.id);
      return { ...state, urls: newShortsUrls };
    }

    default:
      return state;
  }
};

export default ShortUrlReducer;
