export const avatarUrlMock = 'https://placekitten.com/48/48'

export const userDataMock = {
  photoUrl: 'https://placekitten.com/80/80',
  name: 'Jane Doe',
  receivedAmount: 250,
  givenAmount: 100,
}

export const rewardListMock = [
  {
    avatarUrl: avatarUrlMock,
    title: 'Big thanks for your help on the outage today!!!',
    senderName: 'John Chen',
    recipientName: 'David Greene',
    amount: 250,
    sentAt: new Date(2022, 7, 10).toISOString(),
  },
  {
    avatarUrl: avatarUrlMock,
    title:
      'Thanks for your help in creating the product overview deck. Your help to show cases in those scenarios really helped in closing the loop on the story.',
    senderName: 'Jane Doe',
    recipientName: 'Alex Brown',
    amount: 300,
    sentAt: new Date(2022, 7, 7).toISOString(),
  },
]
