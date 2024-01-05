export async function addPerformanceLog(
  componentName,
  actionName,
  screenName,
  startTime,
  endTime,
  isActive
) {
  let SERVICE = {
    LOGGING_URL: "get_kpi_output",
  };
  let _post = "";
  try {
    const url = `${SERVICE.LOGGING_URL}/add_performance_log`;
    const body = {
      componentName,
      actionName,
      screenName,
      startTime,
      endTime,
      isActive,
    };
    return await _post(url, body);
  } catch (error) {
    return;
  }
}
