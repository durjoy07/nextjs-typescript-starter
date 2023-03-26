/**
 * This is an example of a type that does not belong to a specfic component/section
 * but can be used by multiple components/sections
 */

export const sectionThemes = ['primary', 'secondary', 'gray', 'black'] as const;
export type ISectionTheme = (typeof sectionThemes)[number];

export interface IDimension {
  width: number;
  height: number;
}
