const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
    return {
      ...jest.requireActual('@react-navigation/native'),
      useNavigation: () => ({
        navigate: mockedNavigate,
      }),
    };
  });



jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}));