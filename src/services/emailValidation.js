const isEmailUnique = async (email) => {
  const body = {
    campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
    data: {
      email,
    },
  };

  const response = await fetch("https://api.raisely.com/v3/check-user", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export default isEmailUnique;
