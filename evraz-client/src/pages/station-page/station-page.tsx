import { PageForm } from "../../components/form";
import { Header } from "../../components/header/header";
import { StationFilterBar } from "../../components/station-filter-bar/station-filter-bar";
import styles from "./station-page.module.css";

export function StationPage() {
  return (
    <div className={styles.page}>
      <Header />
      <StationFilterBar />
      <PageForm title="АРМ дежурного по станции">
        <div></div>
      </PageForm>
    </div>
  );
}
