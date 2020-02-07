import React from 'react'
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import colors from '../lib/styles/colors/colors.js'
import { IconWrapper } from '../src/docsHelpers'
import {
  AddressIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BedBathIcon,
  BellIcon,
  CheckmarkIcon,
  CloseIcon,
  HeartFilledIcon,
  HeartIcon,
  InfoIcon,
  KeyIcon,
  LockedAddressIcon,
  QuestionIcon,
  SearchIcon,
  SqftIcon,
} from '../lib/components/Icons'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

export default {
  title: 'Icons',
  component: InfoIcon,
}
export const AllIcons = () => (
  <div style={ {
    color: colors.grey700, display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: '100%',
  } }
  >
    <IconWrapper name='AddressIcon'>
      <AddressIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='ArrowDownIcon'>
      <ArrowDownIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='ArrowLeftIcon'>
      <ArrowLeftIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='ArrowRightIcon'>
      <ArrowRightIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='ArrowUpIcon'>
      <ArrowUpIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='BedBathIcon'>
      <BedBathIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='BellIcon'>
      <BellIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='CheckmarkIcon'>
      <CheckmarkIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='CloseIcon'>
      <CloseIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='HeartFilledIcon'>
      <HeartFilledIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='HeartIcon'>
      <HeartIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='InfoIcon'>
      <InfoIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='KeyIcon'>
      <KeyIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='LockedAddressIcon'>
      <LockedAddressIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='QuestionIcon'>
      <QuestionIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='SearchIcon'>
      <SearchIcon size='48px' />
    </IconWrapper>
    <IconWrapper name='SqftIcon'>
      <SqftIcon size='48px' />
    </IconWrapper>
  </div>
)
