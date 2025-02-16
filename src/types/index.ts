export interface TBlog {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  author: string;
  isPublished: boolean;
}

export type TProject = {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  repoLink: string;
};

export type TSession = {
  user: {
    name: string;
    image: string;
  };
};

export type TMessage = {
  _id: string;
  name: string;
  email: string;
  message: string;
};
