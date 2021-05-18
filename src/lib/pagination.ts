/**
 * A modified version of https://github.com/AdeleD/react-paginate
 * extracted and modified the pagination function. 
 */

import { PaginationOptions, PaginationInfo } from '../types';


export function paginate({
  breakLabel,
  marginPagesDisplayed,
  pageRangeDisplayed,
  perPage,
  selected,
  total,
  pathPrefix
}: PaginationOptions): PaginationInfo[] {
  const pages = [];

  const pageCount = Math.ceil(total / perPage);

  if (pageCount <= pageRangeDisplayed) {
    for (let page = 1; page <= pageCount; page++) {
      pages.push(page);
    }
  }
  else {
    let leftSide = pageRangeDisplayed / 2;
    let rightSide = pageRangeDisplayed - leftSide;

    if (selected > pageCount - pageRangeDisplayed / 2) {
      rightSide = pageCount - selected;
      leftSide = pageRangeDisplayed - rightSide;
    } else if (selected < pageRangeDisplayed / 2) {
      leftSide = selected;
      rightSide = pageRangeDisplayed - leftSide;
    }

    for (let page = 1; page <= pageCount; page++) {

      // If the page is lower than the margin defined,
      // the page has to be displayed on the left side of
      // the pagination.
      if (page <= marginPagesDisplayed) {
        pages.push(page);
        continue;
      }

      // If the page is greater than the page count
      // minus the margin defined, the page has to be
      // displayed on the right side of the pagination.
      if (page > pageCount - marginPagesDisplayed) {
        pages.push(page);
        continue;
      }

      // If the page is near the selected page
      // and inside the defined range (pageRangeDisplayed)
      // we have to display it (it will create the center
      // part of the pagination).
      if (page >= selected - leftSide && page <= selected + rightSide) {
        pages.push(page);
        continue;
      }

      // If the page doesn't meet any of the conditions above,
      // we check if the last item of the current "pages" array
      // is a break element. If not, we add a break element, else,
      // we do nothing (because we don't want to display the page).
      if (pages[pages.length - 1] !== breakLabel) {
        pages.push(breakLabel);
      }
    }
  }

  return pages.map(page => {
    if (page === breakLabel) {
      return { label: breakLabel };
    }
    else {
      return {
        label: page.toString(),
        url: pathPrefix + page,
        current: page === selected
      };
    }
  });
}