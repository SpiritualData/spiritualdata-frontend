import { East } from "@mui/icons-material";
import { Button, Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

interface ContentSectionProps {
  imageSrc?: string;
  heading: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imagePosition?: 'left' | 'right';
  imageAlt?: string;
}

const ContentSection = ({
  imageSrc,
  heading,
  description,
  buttonText,
  buttonLink,
  imagePosition = 'left',
  imageAlt = 'content image',
}: ContentSectionProps) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <Box sx={{ width: '100%', py: { xs: 4, md: 8 } }}>
      <Grid 
        container 
        spacing={4}
        sx={{
          flexDirection: { 
            xs: 'column', 
            md: imageSrc ? (isImageLeft ? 'row' : 'row-reverse') : 'row'
          },
          alignItems: 'center',
        }}
      >
        {imageSrc && (
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  maxWidth: '400px',
                  maxHeight: '400px',
                }}
              />
            </Box>
          </Grid>
        )}

        <Grid size={{ xs: 12, md: imageSrc ? 6 : 12 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              textAlign: { xs: 'center', md: imageSrc ? 'left' : 'center' },
              maxWidth: { md: imageSrc ? '600px' : '800px' },
              mx: 'auto',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '24px', md: '32px' },
                fontWeight: 600,
                color: 'black',
              }}
            >
              {heading}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                color: 'black',
                lineHeight: 1.6,
              }}
            >
              {description}
            </Typography>

            {buttonText && buttonLink && (
              <Box sx={{ mt: 2 }}>
                <Link
                  to={buttonLink}
                  style={{ textDecoration: 'none' }}
                  target={buttonLink.startsWith('http') ? '_blank' : ''}
                >
                  <Button
                    variant="text"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.primary.focus,
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: (theme) => theme.palette.primary.focus,
                          color: 'white',
                        },
                      }}
                    >
                      {buttonText}
                      <East sx={{ ml: 1, fontSize: '16px' }} />
                    </Typography>
                  </Button>
                </Link>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentSection;
