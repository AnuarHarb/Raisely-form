const signup = async ({ firstName, lastName, email, password }) => {
  const body = {
    campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  };

  const response = await fetch("https://api.raisely.com/v3/signup", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export default signup;
