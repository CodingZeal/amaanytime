import FeedBlock from './FeedBlock'

export const generated = () => {
  const props = {
    question: {
      id: 1,
      handle: 'String',
      answer: 'It is a crime fighting beaver.',
      order: null,
      pinned: false,
      askedOn: '2022-12-29T18:09:40.569Z',
      updatedOn: '2022-12-29T18:09:40.569Z',
      notGoingToAnswer: false,
      flag: false,
      archive: false,
      askedByUserId: 'de0317cb-599f-490e-9ad3-a87509e129ea',
      askedBy: {
        name: 'Dwight Shrute',
        username: 'dwightshrute',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },

      question: 'Who is Justice Beaver?',
    },
  }
  return <FeedBlock question={props.question} />
}

export default { title: 'Components/FeedBlock' }
