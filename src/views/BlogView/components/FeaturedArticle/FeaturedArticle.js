import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

const FeaturedArticle = ({ featuredArticles }) => {
  const theme = useTheme()

  console.log('FeaturedArticle Data:', featuredArticles)

  return (
    <Box
      sx={{
        maxHeight: 'calc(115vh - 100px)', // or replace with the desired max height
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      {featuredArticles &&
        featuredArticles.map((article, index) => {
          return (
            <Box
              key={index}
              component={'a'}
              href={`/blogArticle/${article.fields.slugName}`}
              display={'block'}
              width={1}
              height={1}
              marginTop={2}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`
                }
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={'flex'}
                flexDirection={{ xs: 'column', md: 'row-reverse' }}
                sx={{ backgroundImage: 'none' }}
              >
                <Box
                  sx={{
                    width: { xs: 1, md: '50%' },
                    position: 'relative'
                  }}
                >
                  <Box
                    component={'img'}
                    loading='lazy'
                    height={1}
                    width={1}
                    src={article.fields.image1[0].url}
                    alt='...'
                    sx={{
                      objectFit: 'cover',
                      maxHeight: 360,
                      filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none'
                    }}
                  />
                  <Chip
                    label='Featured'
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      bgcolor: 'background.paper'
                    }}
                  />
                  <Box
                    component={'svg'}
                    viewBox='0 0 112 690'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      top: '-50%',
                      left: 0,
                      right: 0,
                      color: theme.palette.background.paper,
                      transform: 'scale(2)',
                      height: 1,
                      width: 'auto',
                      transformOrigin: 'top center',
                      display: { xs: 'none', md: 'block' }
                    }}
                  >
                    <path d='M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z' fill='currentColor' />
                  </Box>
                </Box>
                <CardContent
                  sx={{
                    position: 'relative',
                    width: { xs: 1, md: '50%' },
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box>
                    <Typography variant={'h5'} gutterBottom>
                      {article.fields.blogName}
                    </Typography>

                    <Typography color='text.secondary'>{article.fields.introduction}</Typography>
                  </Box>
                  <Box>
                    <Divider sx={{ marginY: 2 }} />
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                      <Box display={'flex'} alignItems={'center'}>
                        <Typography color={'text.secondary'}>{article.fields.authorName}</Typography>
                      </Box>
                      <Typography color={'text.secondary'}>{article.fields.date}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          )
        })}
    </Box>
  )
}

export default FeaturedArticle