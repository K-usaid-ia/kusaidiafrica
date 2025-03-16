// src/lib/analytics.tsx

export const trackVisitor = (pageName: string) => {
    const timestamp = new Date().toISOString();
    const visitorData = { page: pageName, timestamp };
    console.log("Visitor tracked:", visitorData);
    const visits = JSON.parse(localStorage.getItem("kusaidia_visits") || "[]");
    visits.push(visitorData);
    localStorage.setItem("kusaidia_visits", JSON.stringify(visits));
    return visits.filter((v: { page: string }) => v.page === pageName).length;
  };