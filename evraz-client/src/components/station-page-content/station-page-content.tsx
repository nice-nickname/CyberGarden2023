import { OwnerBar } from "../owner-bar";
import { ParkTable } from "../park-table";
import { OptionsBar } from "./options-bar";

import styles from "./station-page-content.module.css";

export function StationPageContent() {
  return (
    <div className={styles.content}>
      <OptionsBar />
      <OwnerBar />
      <ParkTable />
    </div>
  );
}
