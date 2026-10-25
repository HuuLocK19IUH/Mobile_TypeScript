import React, { useCallback, useEffect, useState } from "react";
import { Phone } from "../types";
import { fetchPhone } from "../api/phoneApi";
import { Loading } from "../components/Loading";
import { ErrorBox } from "../components/ErrorBox";
import { SelectPhoneApp } from "./SelectPhoneApp";

export function SelectPhoneApi() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    // TODO 1: reset trạng thái trước khi tải lại
    setError(null);
    setPhone(null);
    // TODO 2: tải sản phẩm id "1", bắt lỗi vào state error
    try {
      setPhone(await fetchPhone("1"));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Đã xảy ra lỗi không xác định");
    }
  }, []);

  // TODO 3: gọi load() khi màn hình mở lần đầu
  useEffect(() => {
    load();
  }, [load]);

  // TODO 4: có lỗi -> ErrorBox với nút thử lại
  if (error) return <ErrorBox message={error} onRetry={load} />;
  // TODO 5: chưa có phone -> Loading
  if (!phone) return <Loading />;
  // TODO 6: có phone -> dùng lại toàn bộ Bài 1
  return <SelectPhoneApp phone={phone} />;
}
