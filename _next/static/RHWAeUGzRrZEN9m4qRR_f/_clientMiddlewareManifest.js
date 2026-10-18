self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/kmay-tech-solutions-site(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api\\/|_next\\/|opengraph-image|.*\\.[a-zA-Z0-9]+$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api/|_next/|opengraph-image|.*\\.[a-zA-Z0-9]+$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()