import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { quizQuestions } from "@/data/quizData";
import { Check, X, Trophy } from "lucide-react";

const QuizCard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;

  const handleOptionSelect = (index: number) => {
    if (!isSubmitted) {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setIsSubmitted(true);
    
    if (selectedOption === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setIsQuizComplete(false);
  };

  const getOptionClassName = (index: number) => {
    const baseClasses = "w-full text-left p-4 rounded-lg border-2 transition-all font-medium";
    
    if (!isSubmitted) {
      return `${baseClasses} ${
        selectedOption === index
          ? "border-primary bg-primary/10 text-primary"
          : "border-border hover:border-primary/50 hover:bg-muted"
      }`;
    }

    // After submission, show correct and wrong answers
    if (index === question.correctAnswer) {
      return `${baseClasses} border-success bg-success/10 text-success`;
    }
    
    if (selectedOption === index && selectedOption !== question.correctAnswer) {
      return `${baseClasses} border-error bg-error/10 text-error`;
    }

    return `${baseClasses} border-border opacity-50`;
  };

  if (isQuizComplete) {
    return (
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="p-6 bg-gradient-to-br from-primary to-accent rounded-full">
              <Trophy className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {score}/{totalQuestions}
          </div>
          <p className="text-xl text-muted-foreground">
            You scored {Math.round((score / totalQuestions) * 100)}%
          </p>
          <p className="text-lg">
            {score === totalQuestions
              ? "Perfect score! Outstanding! 🎉"
              : score >= totalQuestions * 0.7
              ? "Great job! Well done! 👏"
              : score >= totalQuestions * 0.5
              ? "Good effort! Keep practicing! 💪"
              : "Keep trying! You'll improve! 📚"}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={handleRestart}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
          <span className="text-sm font-bold text-primary">
            Score: {score}/{totalQuestions}
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-4">
          <div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
        <CardTitle className="text-2xl font-bold">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            disabled={isSubmitted}
            className={getOptionClassName(index)}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {isSubmitted && index === question.correctAnswer && (
                <Check className="w-5 h-5" />
              )}
              {isSubmitted && selectedOption === index && selectedOption !== question.correctAnswer && (
                <X className="w-5 h-5" />
              )}
            </div>
          </button>
        ))}
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        {!isSubmitted ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 w-full"
            size="lg"
          >
            Submit Answer
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 w-full"
            size="lg"
          >
            {currentQuestion < totalQuestions - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
