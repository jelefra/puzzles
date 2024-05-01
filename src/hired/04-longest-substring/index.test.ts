import findLongestSubstringLength from './index';

describe('findLongestSubstringLength', () => {
  it('passes with test inputs', () => {
    [
      { string: 'nndNfdfdf', answer: 4 },
      {
        string:
          'hYESSdHMphmjmZoUbLZOgFMQWtjxoaIFtpdjrFUpHPSDrIPfHTLMmGpLcGbQIwmlMhEDbvJJMHOpNQYirwaHmLYznDoAiuOHHTvLWkyHdWoJxlzUJKGGgnxHvutaBPmWoAxacxEJIzcarDnsgLFcESsoAiEFWdmpHcjkifxrLLXcvqBSwWzfeLATTxIsSAHoZiRARWsrWitCsrtytiMeBWvNlMWBTcPuRjjPCzVbPBLnoowQmNZCWTBeq',
        answer: 16,
      },
      {
        string:
          'AESjSjncAyrElqFAIBWWNjaDErYDIzOlqrHbJbsuqcYqXphrHsktbHXCpquivPysnsunqvmTUsqgeccTDWeTZsxeqmCUDCDZnFFVKKLikFqiVpSutaYSCyLFvgSBEUSoqCQepDJSjhhkOVwyIKhLbixvJEkQHBBoAANsFGgJFktOoTVcxcXWCgZXhIOaHoeThvCiMeBhretWHphaCSnqSOuhseCqXOFxyEsMxWwQqguKtVyqveQnSgBKn',
        answer: 18,
      },
      {
        string:
          'kvdaqEsdhrOzwEDAOvlwXNbqzAkHzWnCswRheAJqzTpzXcyRFAoZNDVPJQkaAievrgSiamhdOeWGEBzWEcXDPagWoCJINKTUdaROsSHErNGJiPfnxEabysaUsRqmeUZvMqvdBkSQfmZKMeIeuVslbKxrmUWPqMKYTTdEzcmtJTnJkpvuiqpimxLBtQciUwFnqEBYjRjSoMiYNLcWUjDLdomEwZsxaTefiLdHScgZdAQqvbOrbARLNtFvE',
        answer: 20,
      },
    ].forEach(({ string, answer }) => {
      expect(findLongestSubstringLength(string)).toEqual(answer);
    });
  });
});
