import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "Hybix Group";
    const defaultDescription = "Building everything in tech, app, ml, ai, editing. Your partner for Enterprise ERP, Data Analytics, Business Intelligence, and Automation solutions.";
    const defaultKeywords = "tech, app, ml, ai, editing, web development, software solutions, enterprise erp, data analytics, business intelligence, automation";
    const siteUrl = "https://hybixgroup.com"; // Replace with actual domain if different
    const defaultImage = "/src/assets/Hybix.svg"; // Fallback image

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
