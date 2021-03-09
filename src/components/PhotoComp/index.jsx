import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const PhotoComp = ({ photo }) => {
  const classes = useStyles()
  const { user, urls, alt_description, key } = photo
  return (
    <div className="flex items-center justify-center">
      <figure className="relative max-w-3xl cursor-pointer" key={key}>
        <img
          alt={alt_description}
          className="rounded-lg shadow-xl hover:shadow-2xl hover:opacity-80"
          src={urls.full}
        />
        <figcaption className="absolute text-sm -mt-8 text-white bg-gray-800 bg-opacity-40 px-6 space-x-2">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Photo by
              </Typography>
              <Typography variant="h5" component="a">
                <a
                  className="credit"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://unsplash.com/@${user.username}`}
                >
                  {user.name}
                </a>
              </Typography>
              <span>on</span>
              <a
                className="unsplash-link"
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/?utm_source=gatsby_v3&utm_medium=referral"
              >
                Unsplash
              </a>
            </CardContent>
          </Card>
        </figcaption>
      </figure>
    </div>
  )
}

export default PhotoComp
