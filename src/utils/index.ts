/**
 * This is an example of an util function that does not belong to a specfic component/section
 * but can be used by multiple components/sections
 *
 * Please remove this folder if it is not necessary for your project.
 */

export function formatDateGlobal(date: Date) {
  return date.toLocaleDateString(undefined, {
    dateStyle: 'full',
    hour: '2-digit',
    day: '2-digit',
  });
}
