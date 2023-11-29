<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/library">
    <xsl:for-each select="book">
        <div style="border: 1px solid black; padding: 10px;">
            Book: <xsl:value-of select="title" /> <br/>
            Author: <xsl:value-of select="author" /> <br/>
            Published: <xsl:value-of select="year" /> <br/> <br/>
        </div>
    </xsl:for-each>
</xsl:template>

</xsl:stylesheet>
