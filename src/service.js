export const getCardInfo = async (lat, long) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${lat}&longitude=${long}&timezone=America/Argentina/Jujuy`
    );
    return response.json();
  } catch {
    throw new Error("could not fetch color palettes");
  }
};

// -29.437501148031682, -66.89722550531977;
