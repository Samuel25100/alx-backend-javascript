export default function createReportObject(employeesList) {
  const result = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employee) {
      const keys = Object.keys(employee);
      return (keys.length);
    },
  };
  return (result);
}
