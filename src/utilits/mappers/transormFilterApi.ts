interface IProps {
  id: string;
  externalId: IImbd;
}

interface IImbd {
  imdb: string;
}

export const transformFilterApi = (docs: IProps[]) => {
  return docs.map((item) => {
    return { imdbID: item.externalId.imdb };
  });
};
