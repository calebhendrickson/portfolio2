import { Post }       from './post';

const POSTS: Post[] = [
  { id: 0, price: 100000, title: 'ford fusion', body: 'Used ford fusion!', type: "Car" },
  { id: 1, price: 200, title: 'something', body: 'Buy it', type: "Unkown" },
  { id: 5, price: 7, title: 'a cacti', body: '5 cacti', type: "Botony" }
];


export class PostService {
  getPosts() : Post[] {
    return POSTS;
  }

  getPostsFilter(type: string) : Post[]
  {
    if (type === "All")
      return this.getPosts();
    return POSTS.filter((post) => post.type === type);
  }
  getPost(id: number) : Post {
    for (var i = 0; i < POSTS.length; i++)
    {
      if (id === POSTS[i].id)
        return POSTS[i];
    }

    return null;
  }
}
