import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  Fade,
  Slide,
  Card,
  CardContent,
  Chip,
  IconButton,
  LinearProgress,
} from "@mui/material";
import {
  ArrowForward,
  ArrowBack,
  CheckCircle,
  Psychology,
  SelfImprovement,
  Favorite,
  LocalHospital,
  EmojiPeople,
  FamilyRestroom,
  Work,
  School,
  Spa,
  AutoAwesome,
  VolunteerActivism,
  ConnectWithoutContact,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

interface IssueOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: "mental" | "spiritual";
  subcategories: SubOption[];
}

interface SubOption {
  id: string;
  title: string;
  description: string;
}

const OnboardingFlow: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useUser();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [selectedSubOptions, setSelectedSubOptions] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  const totalSteps = 4;

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const mainIssues: IssueOption[] = useMemo(() => [
    {
      id: "mental-health",
      title: "Mental Health",
      description: "Emotional and psychological wellbeing challenges",
      icon: <Psychology sx={{ fontSize: 40, color: theme.palette.primary.focus }} />,
      category: "mental",
      subcategories: [
        { id: "depression", title: "Depression", description: "Persistent sadness and loss of interest" },
        { id: "anxiety", title: "Anxiety", description: "Excessive worry and fear" },
        { id: "stress", title: "Stress", description: "Overwhelming pressure and tension" },
        { id: "trauma", title: "Trauma", description: "Past experiences affecting current wellbeing" },
        { id: "grief", title: "Grief & Loss", description: "Processing loss and bereavement" },
        { id: "relationships", title: "Relationship Issues", description: "Challenges in personal connections" },
        { id: "self-esteem", title: "Self-Esteem", description: "Confidence and self-worth concerns" },
        { id: "addiction", title: "Addiction", description: "Substance or behavioral dependencies" },
      ],
    },
    {
      id: "spiritual-growth",
      title: "Spiritual Growth",
      description: "Journey of spiritual awakening and development",
      icon: <SelfImprovement sx={{ fontSize: 40, color: theme.palette.primary.focus }} />,
      category: "spiritual",
      subcategories: [
        { id: "purpose", title: "Life Purpose", description: "Finding meaning and direction in life" },
        { id: "meditation", title: "Meditation & Mindfulness", description: "Developing inner awareness and peace" },
        { id: "faith-crisis", title: "Faith Crisis", description: "Questioning beliefs and spiritual identity" },
        { id: "connection", title: "Spiritual Connection", description: "Deepening relationship with the divine" },
        { id: "energy", title: "Energy & Chakras", description: "Understanding and balancing spiritual energy" },
        { id: "awakening", title: "Spiritual Awakening", description: "Experiencing spiritual transformation" },
        { id: "practices", title: "Spiritual Practices", description: "Developing consistent spiritual habits" },
        { id: "community", title: "Spiritual Community", description: "Finding like-minded spiritual companions" },
      ],
    },
  ], [theme.palette.primary.focus]);

  const handleIssueSelection = (issueId: string) => {
    setSelectedIssues(prev => 
      prev.includes(issueId) 
        ? prev.filter(id => id !== issueId)
        : [...prev, issueId]
    );
  };

  const handleSubOptionSelection = (subOptionId: string) => {
    setSelectedSubOptions(prev => 
      prev.includes(subOptionId) 
        ? prev.filter(id => id !== subOptionId)
        : [...prev, subOptionId]
    );
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding and redirect to chat
      navigate("/chat");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const selectedSubcategories = useMemo(() => {
    const allSubcategories: SubOption[] = [];
    selectedIssues.forEach(issueId => {
      const issue = mainIssues.find(i => i.id === issueId);
      if (issue) {
        allSubcategories.push(...issue.subcategories);
      }
    });
    return allSubcategories;
  }, [selectedIssues, mainIssues]);

  const renderWelcomeStep = () => (
    <Fade in={loaded} timeout={800}>
      <Box sx={{ textAlign: "center", maxWidth: 600, mx: "auto" }}>
        <Slide direction="up" in={loaded} timeout={800}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: theme.palette.text.primary,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                mb: 3,
                fontFamily: "Outfit",
              }}
            >
              Welcome, {user?.firstName || "Friend"}! 🌟
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                lineHeight: 1.6,
                fontFamily: "Outfit",
              }}
            >
              Let's personalize your SpiritualData experience by understanding 
              what areas of your life you'd like guidance and support with.
            </Typography>
            <Box
              sx={{
                bgcolor: "#F9FAF4",
                borderRadius: 3,
                p: 4,
                mb: 4,
                boxShadow: `0px 6px 20px ${theme.palette.cardshadow.main}`,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  fontFamily: "Outfit",
                  fontSize: "1.1rem",
                }}
              >
                This quick setup will help us provide more relevant insights, 
                resources, and support tailored specifically to your journey.
              </Typography>
            </Box>
          </Box>
        </Slide>
      </Box>
    </Fade>
  );

  const renderIssueSelection = () => (
    <Fade in={loaded} timeout={600}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
            mb: 2,
            textAlign: "center",
            fontFamily: "Outfit",
          }}
        >
          What areas would you like support with?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            mb: 4,
            textAlign: "center",
            fontSize: "1.1rem",
            fontFamily: "Outfit",
          }}
        >
          Select all that apply. Don't worry - you can always adjust this later.
        </Typography>
        
        <Grid container spacing={3} sx={{ maxWidth: 800, mx: "auto" }}>
          {mainIssues.map((issue, index) => (
            <Grid item xs={12} md={6} key={issue.id}>
              <Slide direction="up" in={loaded} timeout={600 + index * 200}>
                <Card
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    height: "100%",
                    bgcolor: selectedIssues.includes(issue.id) 
                      ? theme.palette.primary.focus 
                      : "#F9FAF4",
                    border: selectedIssues.includes(issue.id) 
                      ? `2px solid ${theme.palette.primary.focus}` 
                      : "2px solid transparent",
                    boxShadow: selectedIssues.includes(issue.id)
                      ? `0px 8px 25px rgba(211, 235, 99, 0.3)`
                      : `0px 6px 20px ${theme.palette.cardshadow.main}`,
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0px 12px 30px rgba(211, 235, 99, 0.25)`,
                    },
                  }}
                  onClick={() => handleIssueSelection(issue.id)}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    {issue.icon}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mt: 2,
                        mb: 1,
                        color: theme.palette.text.primary,
                        fontFamily: "Outfit",
                      }}
                    >
                      {issue.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontFamily: "Outfit",
                      }}
                    >
                      {issue.description}
                    </Typography>
                    {selectedIssues.includes(issue.id) && (
                      <CheckCircle
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          color: theme.palette.text.primary,
                        }}
                      />
                    )}
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );

  const renderSubOptionSelection = () => {
    const subcategories = selectedSubcategories;
    
    return (
      <Fade in={loaded} timeout={600}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 2,
              textAlign: "center",
              fontFamily: "Outfit",
            }}
          >
            Let's get more specific
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 4,
              textAlign: "center",
              fontSize: "1.1rem",
              fontFamily: "Outfit",
            }}
          >
            Choose the specific areas you'd like to focus on most.
          </Typography>

          <Box sx={{ maxWidth: 900, mx: "auto" }}>
            <Grid container spacing={2}>
              {subcategories.map((subOption, index) => (
                <Grid item xs={12} sm={6} md={4} key={subOption.id}>
                  <Slide direction="up" in={loaded} timeout={400 + index * 100}>
                    <Chip
                      label={subOption.title}
                      onClick={() => handleSubOptionSelection(subOption.id)}
                      sx={{
                        width: "100%",
                        height: "auto",
                        py: 2,
                        px: 2,
                        fontSize: "1rem",
                        fontFamily: "Outfit",
                        fontWeight: selectedSubOptions.includes(subOption.id) ? 600 : 400,
                        bgcolor: selectedSubOptions.includes(subOption.id)
                          ? theme.palette.primary.focus
                          : "#F9FAF4",
                        color: theme.palette.text.primary,
                        border: selectedSubOptions.includes(subOption.id)
                          ? `2px solid ${theme.palette.primary.focus}`
                          : "2px solid #E0E0E0",
                        transition: "all 0.3s ease",
                        "& .MuiChip-label": {
                          whiteSpace: "normal",
                          textAlign: "center",
                        },
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: `0px 4px 15px rgba(211, 235, 99, 0.25)`,
                        },
                      }}
                      clickable
                    />
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Fade>
    );
  };

  const renderCompletionStep = () => (
    <Fade in={loaded} timeout={800}>
      <Box sx={{ textAlign: "center", maxWidth: 600, mx: "auto" }}>
        <Slide direction="up" in={loaded} timeout={800}>
          <Box>
            <Box sx={{ mb: 4 }}>
              <AutoAwesome sx={{ fontSize: 80, color: theme.palette.primary.focus }} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: theme.palette.text.primary,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                mb: 3,
                fontFamily: "Outfit",
              }}
            >
              You're All Set! ✨
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                lineHeight: 1.6,
                fontFamily: "Outfit",
              }}
            >
              Thank you for sharing. We'll use this information to provide 
              personalized guidance and resources for your journey.
            </Typography>
            
            <Box
              sx={{
                bgcolor: "#F9FAF4",
                borderRadius: 3,
                p: 4,
                mb: 4,
                boxShadow: `0px 6px 20px ${theme.palette.cardshadow.main}`,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  fontFamily: "Outfit",
                  fontSize: "1.1rem",
                  mb: 2,
                }}
              >
                <strong>Your Selected Areas:</strong>
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
                {selectedSubOptions.slice(0, 6).map((subOptionId) => {
                  const subOption = selectedSubcategories.find(s => s.id === subOptionId);
                  return subOption ? (
                    <Chip
                      key={subOptionId}
                      label={subOption.title}
                      sx={{
                        bgcolor: theme.palette.primary.focus,
                        color: theme.palette.text.primary,
                        fontFamily: "Outfit",
                        fontWeight: 500,
                      }}
                    />
                  ) : null;
                })}
                {selectedSubOptions.length > 6 && (
                  <Chip
                    label={`+${selectedSubOptions.length - 6} more`}
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: theme.palette.text.secondary,
                      fontFamily: "Outfit",
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Slide>
      </Box>
    </Fade>
  );

  const canProceed = () => {
    switch (currentStep) {
      case 0: return true; // Welcome step
      case 1: return selectedIssues.length > 0; // Issue selection
      case 2: return selectedSubOptions.length > 0; // Sub-option selection
      case 3: return true; // Completion
      default: return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: return renderWelcomeStep();
      case 1: return renderIssueSelection();
      case 2: return renderSubOptionSelection();
      case 3: return renderCompletionStep();
      default: return renderWelcomeStep();
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.primary.main,
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        fontFamily: "Outfit",
      }}
    >
      {/* Progress Bar */}
      <Box sx={{ mb: 6, maxWidth: 800, mx: "auto" }}>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mb: 1,
            textAlign: "center",
            fontFamily: "Outfit",
          }}
        >
          Step {currentStep + 1} of {totalSteps}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(currentStep / (totalSteps - 1)) * 100}
          sx={{
            height: 8,
            borderRadius: 4,
            bgcolor: "#E0E0E0",
            "& .MuiLinearProgress-bar": {
              bgcolor: theme.palette.primary.focus,
              borderRadius: 4,
            },
          }}
        />
      </Box>

      {/* Main Content */}
      <Box sx={{ mb: 6 }}>
        {renderStep()}
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 800,
          mx: "auto",
          mt: 6,
        }}
      >
        <Button
          variant="outlined"
          onClick={handleBack}
          disabled={currentStep === 0}
          startIcon={<ArrowBack />}
          sx={{
            borderColor: theme.palette.text.secondary,
            color: theme.palette.text.secondary,
            fontFamily: "Outfit",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: 3,
            "&:hover": {
              borderColor: theme.palette.primary.focus,
              color: theme.palette.primary.focus,
            },
            "&:disabled": {
              opacity: 0.3,
            },
          }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!canProceed()}
          endIcon={currentStep < totalSteps - 1 ? <ArrowForward /> : undefined}
          sx={{
            bgcolor: theme.palette.primary.focus,
            color: theme.palette.text.primary,
            fontFamily: "Outfit",
            fontWeight: 700,
            px: 6,
            py: 1.5,
            borderRadius: 3,
            fontSize: "1.1rem",
            textTransform: "none",
            boxShadow: `0px 6px 20px rgba(211, 235, 99, 0.3)`,
            "&:hover": {
              bgcolor: "#B8D954",
              transform: "translateY(-2px)",
              boxShadow: `0px 8px 25px rgba(211, 235, 99, 0.4)`,
            },
            "&:disabled": {
              bgcolor: "#E0E0E0",
              color: "#A0A0A0",
            },
          }}
        >
          {currentStep < totalSteps - 1 ? "Continue" : "Start Your Journey"}
        </Button>
      </Box>
    </Box>
  );
};

export default OnboardingFlow;