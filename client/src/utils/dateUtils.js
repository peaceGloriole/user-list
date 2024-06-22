export const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(`en-US`, {
      month: `long`,
      day: `numeric`,
      year: `numeric`,
    });
  };