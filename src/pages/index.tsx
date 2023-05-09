import Layout from "@/components/layout/layout";
import StartingPageContent from "@/components/starting-page/starting-page";
import PlaySound from "@/components/utils/play-sound";

export default function Home() {
  return (
    <Layout>
      <PlaySound />
      <StartingPageContent />
    </Layout>
  );
}
