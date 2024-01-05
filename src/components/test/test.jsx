import React, { useEffect, useRef } from "react";
import moment from "moment";
import { addPerformanceLog } from "./services/ConfigServices";

function PerformanceLog({
  children,
  api_urls = [],
  componentName,
  actionName,
  screenName,
  isActive,
}) {
  console.log("api_urls", api_urls);
  console.log("componentName", componentName);
  console.log("actionName", actionName);
  console.log("isActive", isActive);
  const hasRunRef = useRef(false);
  useEffect(() => {
    const handleLoad = () => {
      try {
        const startTime = moment.now();
        const formattedStartTime = moment(startTime).format(
          "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
        );

        setTimeout(() => {
          try {
            const resources = performance.getEntriesByType("resource");
            const xhrResources = resources.filter(
              (resource) => resource.initiatorType === "xmlhttprequest"
            );

            const filteredResources = xhrResources.filter((resource) => {
              return api_urls.some((api) => resource.name.includes(api));
            });

            const totalDurations = {};
            api_urls.forEach((api) => {
              const matchingResources = filteredResources.filter((resource) =>
                resource.name.includes(api)
              );
              const totalDuration =
                matchingResources.length >= 1
                  ? matchingResources[0].duration
                  : 0;
              totalDurations[api] = totalDuration;
            });

            const totalDurationAllAPIs = filteredResources.reduce(
              (acc, resource) => acc + resource.duration,
              0
            );

            const endProcessingTime = moment.now();
            const endTime = moment(endProcessingTime).add(
              totalDurationAllAPIs,
              "millisecond"
            );

            addPerformanceLog({
              componentName: "Overview",
              actionName: "onLoad",
              screenName: "Overview",
              formattedStartTime,
              endTime,
              isActive: 1,
            });
          } catch (error) {
            console.error(
              "Error processing resources in PerformanceLog:",
              error
            );
          }
        }, 10000);
      } catch (error) {
        console.error("Error in PerformanceLog handleLoad:", error);
      }
    };

    if (!hasRunRef.current) {
      handleLoad();
      hasRunRef.current = true;
    }
  }, [api_urls, componentName, actionName, screenName, isActive, hasRunRef]);

  return children;
}

export default PerformanceLog;
