self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/kmay-tech-solutions-site(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/|.*\\.[a-zA-Z0-9]+$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next/|.*\\.[a-zA-Z0-9]+$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()