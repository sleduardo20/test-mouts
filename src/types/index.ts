export type OfficialLanguages = {
  name: string;
};

export type Flag = {
  svgFile: string;
};

export type TopLevelDomain = {
  name: string;
};

export type Borders = {
  name: string;
  flag: Flag;
};

export interface BaseProps {
  children: React.ReactNode;
}

export interface CardProps {
  flag: Flag;
  name: string;
  capital: string;
}

export interface DetailsProps {
  name: string;
  flag: Flag;
  capital: string;
  population: string;
  area: string;
  topLevelDomain: TopLevelDomain;
  language: OfficialLanguages;
  borders: Borders;
}
