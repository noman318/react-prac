// import React from "react";
// import { act, render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import assert from "assert";
// import PerformanceLog from "./test";
// import { addPerformanceLog } from "./services/ConfigServices";
// import moment from "moment";

// jest.mock("./services/ConfigServices", () => ({
//   addPerformanceLog: jest.fn(),
// }));
// var api_urls = [
//   "get_kpi_output",
//   "get_ods_data_by_case_id_list_time_range",
//   "get_ods_kpi_tag_by_case_id",
//   "get_asset_status",
//   "get_system_toptile_data",
//   "get_contributor_output",
//   "get_overview_trend",
//   "get_insights_output",
//   "get_trenddata_actual_optimum",
// ];
// var componentName = "Overview";
// var actionName = "onLoad";
// var screenName = "Overview";
// var isActive = 1;

// var startTime = moment.now();
// var formattedStartTime = moment(startTime).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

// var endTime = moment(startTime).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");

// describe("PerformanceLog component", () => {
//   it("renders children", () => {
//     var { queryAllByText } = render(<PerformanceLog>Hello</PerformanceLog>);
//     assert(queryAllByText != undefined);
//   });
// });

// // ... Import statements

// describe("PerformanceLog", () => {
//   beforeEach(() => {
//     jest.useFakeTimers(); // Mocking timers for setTimeout
//   });

//   afterEach(() => {
//     jest.runOnlyPendingTimers();
//     jest.useRealTimers();
//   });

//   it("should call addPerformanceLog with the correct parameters", () => {
//     api_urls = api_urls;
//     componentName = componentName;
//     actionName = actionName;
//     screenName = screenName;
//     isActive = isActive;
//     endTime = endTime;
//     startTime = startTime;

//     render(
//       <PerformanceLog
//         api_urls={api_urls}
//         componentName={componentName}
//         actionName={actionName}
//         screenName={screenName}
//         isActive={isActive}
//         endTime={endTime}
//         startTime={startTime}
//       >
//         <div>Test Content</div>
//       </PerformanceLog>
//     );

//     // Advance timers to trigger the setTimeout
//     act(() => {
//       jest.advanceTimersByTime(10000);
//     });
//     expect(addPerformanceLog).toHaveBeenCalledWith(
//       (api_urls = "get_kpi_output"),
//       (componentName = "Overview"),
//       (actionName = "onLoad"),
//       (formattedStartTime = "2024-01-05T17:01:12.456Z"),
//       (endTime = "2024-01-05T17:01:12.456Z"),
//       (screenName = "Overview"),
//       (isActive = 1)
//     );
//   });
// });

import React from "react";
import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import assert from "assert";
import PerformanceLog from "./test";
import { addPerformanceLog } from "./services/ConfigServices";
import moment from "moment";

jest.mock("./services/ConfigServices", () => ({
  addPerformanceLog: jest.fn(),
}));

const api_urls = [
  "get_kpi_output",
  "get_ods_data_by_case_id_list_time_range",
  "get_ods_kpi_tag_by_case_id",
  "get_asset_status",
  "get_system_toptile_data",
  "get_contributor_output",
  "get_overview_trend",
  "get_insights_output",
  "get_trenddata_actual_optimum",
];

const componentName = "Overview";
const actionName = "onLoad";
const screenName = "Overview";
const isActive = 1;

const startTime = moment.now();
const formattedStartTime = "2024-01-05T17:12:05.029Z";

const endTime = "2024-01-05T17:12:05.029Z";
describe("PerformanceLog component", () => {
  it("renders children", () => {
    const { queryAllByText } = render(<PerformanceLog>Hello</PerformanceLog>);
    assert(queryAllByText != undefined);
  });
});

describe("PerformanceLog", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  // it("should call addPerformanceLog with the correct parameters", () => {
  //   render(
  //     <PerformanceLog
  //       api_urls={api_urls}
  //       componentName={componentName}
  //       actionName={actionName}
  //       screenName={screenName}
  //       isActive={isActive}
  //       endTime={endTime}
  //       startTime={startTime}
  //     >
  //       <div>Test Content</div>
  //     </PerformanceLog>
  //   );

  //   // Advance timers to trigger the setTimeout
  //   act(() => {
  //     jest.advanceTimersByTime(10000);
  //   });

  //   expect(addPerformanceLog).toHaveBeenCalledWith({
  //     componentName: "Overview",
  //     actionName: "onLoad",
  //     screenName: "Overview",
  //     formattedStartTime,
  //     endTime,
  //     isActive: 1,
  //   });
  // });
  // Successfully sends a POST request to the logging URL with the correct body
  it("should send request with correct body", async () => {
    const componentName = "Overview";
    const actionName = "onLoad";
    const screenName = "Overview";
    const startTime = formattedStartTime;
    const endTime = moment.now();
    const isActive = 1;
    let SERVICE = {
      LOGGING_URL: "get_kpi_output",
    };
    // console.log("LOGGING_URL", SERVICE.LOGGING_URL);
    const expectedUrl = `${SERVICE.LOGGING_URL}/add_performance_log`;
    const expectedBody = {
      componentName,
      actionName,
      screenName,
      startTime,
      endTime,
      isActive,
    };

    _post.mockResolvedValueOnce();

    await addPerformanceLog(
      componentName,
      actionName,
      screenName,
      startTime,
      endTime,
      isActive
    );

    expect(_post).toHaveBeenCalledWith(expectedUrl, expectedBody);
  });
});
