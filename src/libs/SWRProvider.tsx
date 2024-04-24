"use client";

import React from "react";
import { SWRConfig } from "swr";

export default function SWRProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig
      //SWR global 설정, 현재는 예시를 위한 에러처리만 등록
      value={{
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
          if (error.status === 404) return;
          if (retryCount >= 1) return;
          setTimeout(() => revalidate({ retryCount }), 5000);
        },
        revalidateOnFocus: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
