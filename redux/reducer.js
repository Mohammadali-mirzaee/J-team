import * as t from './types';

const initState = {
  users: [
    {
      name: 'Jimi Tadi',
      image: '/images/jimi.jpg',
      id: 'B02J36213AP/9rZGO1Ab9LWnID8GxFqwwPoi',
      status: false,
    },
    {
      name: 'Roy Josefsson',
      image: '/images/roy.jpg',
      id: 'B02J5BVD4AG/WR85XKPrMYhJOlEJX5gdyrWa',
      status: false,
    },
    {
      name: 'Martin Lindström',
      image: '/images/martin.jpg',
      id: 'B02JSRJDU00/OvFT630mXlyv5g8i8J2nEMXg',
      status: false,
    },
    {
      name: 'Joel Nord',
      image: '/images/joel.jpg',
      id: 'B02J362LARH/kEaC4oxWw0ndLyRm2WFvFUy4',
      status: false,
    },
    {
      name: 'John Ghavamzade',
      image: '/images/john.jpg',
      id: 'B02HNF6Q5F1/UMfa4EuPO4gnT8uu4tWqNEQ2',
      status: false,
    },
    {
      name: 'Farid Boukhaled',
      image: '/images/farid.jpg',
      id: 'B02J36131V1/zjqWl0GEHiUqPjD6rqbeLJFu',
      status: false,
    },
    {
      name: 'John-Eric Uddh',
      image: '/images/jEric.jpg',
      id: 'B02JSRDSM0Q/Ker4p52RfxsoABT1ueIcaHZT',
      status: false,
    },
    {
      name: 'Mohammadali Mirzaee',
      image: '/images/mohammad.jpg',
      id: 'B02JSQD1NSU/1bzvW6qpgMPQcW8xbRUyJq0e',
      status: false,
    },
  ],
  priorit: [
    {
      prio: 'Prio 1',
      value: 1,
      changeColor: false,
    },
    {
      prio: 'Prio 2',
      value: 2,
      changeColor: false,
    },
    {
      prio: 'Prio 3',
      value: 3,
      changeColor: false,
    },
  ],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case t.SET_USER_TO_GREEN:
      const modifiedUsers = [...initState.users];
      const indexOfUser = modifiedUsers.findIndex(
        (x) => x.id === action.payload
      );
      modifiedUsers[indexOfUser] = {
        ...modifiedUsers[indexOfUser],
        status: true,
      };
      return { ...state, users: modifiedUsers };

    default:
      return state;
  }
};

export default reducer;
