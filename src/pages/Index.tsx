import QuizCard from "@/components/QuizCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background flex items-center justify-center p-2">
  <div className="w-full max-w-4xl flex flex-col items-center">
    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        NLITQuiz
      </h1>
      <p className="text-lg text-muted-foreground">
        Test your knowledge - New Lumbini IT Club
      </p>
    </div>

    {/* Quiz Card centered */}
    <div className="w-full flex justify-center">
      <QuizCard />
    </div>
    <span className="text-center"><br />Best of Luck🤞<br /> Made and Maintained with ❤️ by Sagar Bhusal</span>
  </div>
</div>

  );
};

export default Index;
